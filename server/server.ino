#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

const char* ssid = "gado";
const char* password = "naigasosa";
const int ledPin = 2;
WiFiServer server(1337);

void printWiFiStatus();

void setup(void) {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  // Configure GPIO2 as OUTPUT.
  pinMode(ledPin, OUTPUT);

  // Start TCP server.
  server.begin();
}

void loop(void) {
  // Check if module is still connected to WiFi.
  if (WiFi.status() != WL_CONNECTED) {
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
    }
    // Print the new IP to Serial.
    printWiFiStatus();
  }

  WiFiClient client = server.available();

  if (client) {
    Serial.println("Client connected.");

    while (client.connected()) {
      if (client.available()) {
        char command = client.read();
        if (command == 'H') {
          digitalWrite(ledPin, HIGH);
          Serial.println("LED is now on.");
        }
        else if (command == 'L') {
          digitalWrite(ledPin, LOW);
          Serial.println("LED is now off.");
        }
      }
    }
    Serial.println("Client disconnected.");
    client.stop();
  }
}

void printWiFiStatus() {
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}


/* #include <DHT.h>        // including the library of DHT11 temperature and humidity sensor
#define DHTTYPE DHT11   // DHT 11

#define dht_dpin 4
DHT dht(dht_dpin, DHTTYPE); 
void setup(void) { 
  dht.begin();
  Serial.begin(9600);
  Serial.println("Humidity and temperature\n\n");
  delay(700);

}
void loop() {
    float h = dht.readHumidity();
    float t = dht.readTemperature();         
    Serial.print("Current humidity = ");
    Serial.print(h);
    Serial.print("%  ");
    Serial.print("temperature = ");
    Serial.print(t); 
    Serial.println("C  ");
  delay(800);
}
 */