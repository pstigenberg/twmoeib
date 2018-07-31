FROM golang:1.8

RUN go get github.com/gorilla/mux && \ 
    go get github.com/gorilla/handlers && \
    go get github.com/canthefason/go-watcher
    
ADD ./src /go/src/api

RUN go install api && \ 
    go install github.com/canthefason/go-watcher/cmd/watcher
 
EXPOSE 8081

WORKDIR /go/src/

CMD ["watcher", "-run", "api"]