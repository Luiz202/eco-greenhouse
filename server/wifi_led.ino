#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include "meuwifi.h"

ESP8266WebServer server(80); 
WiFi.begin(ssid, password);  

// Wait for connection
do {
  delay(500);
  Serial.print(".");
} while (WiFi.status() != WL_CONNECTED)

void setup() {
  Serial.begin(115200);
  WiFi.localIP();
}

void loop() {
  
}