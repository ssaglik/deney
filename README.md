
openssl genrsa -out deney-key.pem 2048

openssl req -new -sha256 -key deney-key.pem -out deney-csr.pem
(all enter)

openssl x509 -req -in deney-csr.pem -signkey deney-key.pem -out deney-cert.pem