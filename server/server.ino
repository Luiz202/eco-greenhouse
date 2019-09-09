#include "Arduino.h"
#include "Esp.h"
#include "ESP8266WiFi.h"
/* #include "DHT.h"

#define DHTTYPE DHT11
#define DHTPIN d1 */

const char* ssid = "Shang_Office";
const char* password = "C18A15L11P26";

const int ledPin = 4;

void setup() {
	Serial.begin(115200);
	
	WiFi.begin(ssid, password);

	pinMode(ledPin, OUTPUT);

	while (WiFi.status() != WL_CONNECTED) {
    	delay(500);
    	Serial.print(".");
  	}
	  
	Serial.println("");
	Serial.println("WiFi connected");

	// Start the server
	server.begin();
	Serial.println("Server started");

	// Print the IP address
	Serial.print("Use this URL to connect: ");
	Serial.print("http://");
	Serial.print(WiFi.localIP());
	Serial.println("/");
}

void loop() {
	digitalWrite(ledPin, HIGH);
	delay(100);
	digitalWrite(ledPin, LOW);
	delay(100);
}