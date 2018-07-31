package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

// APIKeyName constant for api key param
const APIKeyName = "Authorization"

// APIEnvVariableName constant for api key environment variable
const APIEnvVariableName = "API_KEY"

// Response a struct representing the response object
type Response struct {
	Settings Settings `json:"settings"`
}

// Settings a struct representing the settings object
type Settings struct {
	IndexPageHeading string `json:"indexPageHeading"`
}

func main() {
	// Setup handlers for routes
	router := mux.NewRouter()

	router.HandleFunc("/", IndexGetHandler)
	router.HandleFunc("/settings", SettingsGetHandler)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", APIKeyName})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	log.Fatal(http.ListenAndServe(":8081", handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}

// IndexGetHandler fetches the main index page
func IndexGetHandler(w http.ResponseWriter, r *http.Request) {
	if !authenticated(r) {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	switch r.Method {
	case "OPTIONS":
		w.WriteHeader(http.StatusOK)
	case "GET":
		fmt.Fprint(w, "An API, if you know it you know it")
		w.WriteHeader(http.StatusOK)
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

// SettingsGetHandler fetches the main index page
func SettingsGetHandler(w http.ResponseWriter, r *http.Request) {
	if !authenticated(r) {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	switch r.Method {
	case "OPTIONS":
		w.WriteHeader(http.StatusOK)
	case "GET":
		dummyAnswer := Response{Settings{IndexPageHeading: "It works! This setting comes from the API"}}
		dummyData, _ := json.Marshal(dummyAnswer)
		fmt.Fprint(w, string(dummyData))
		w.WriteHeader(http.StatusOK)
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

// Checks if api-token is provided and correct
func authenticated(request *http.Request) bool {
	// check for valid header
	token := request.Header[APIKeyName]
	if token == nil {
		fmt.Println("Got no auth token")
		return false
	}

	// check if we have a valid key
	if token[0] != os.Getenv(APIEnvVariableName) {
		fmt.Println("Got wrong auth token")
		return false
	}

	return true
}
