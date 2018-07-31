FROM golang:1.8

RUN go get github.com/gorilla/mux && \ 
    go get github.com/gorilla/handlers
    
ADD ./src /go/src/api

RUN go install api
 
EXPOSE 8081

WORKDIR /go/src/api

CMD ["go", "run", "main.go"]