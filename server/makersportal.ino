#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>

#include "pwm_slider_button.h" // file where html page is written

#define STASSID "ABC-123" // name of router
#define STAPSK  "pwd_56789" // pwd for router

#define PWM_pin 4  // PWM pin
#define button_pin 15 // button pin for LED etc.

const char* ssid = STASSID;
const char* password = STAPSK;

ESP8266WebServer server(80); // port 80 (standard)

// prints out main page with pwm slider and button etc...

void handle_root() {
 String root_code = html_page; // html code from .h file
 server.send(200, "text/html", root_code); // upload code to show webpage
}

// handling button press on webpage

void handle_button() {
 String button_state = server.arg("button_state"); // on page ./setButton we are reading the variable 'button_state'
 
 String curr_state = "OFF"; // for sending back to the page
 if(button_state == "1")
 {
  digitalWrite(button_pin,HIGH); //LED ON
  curr_state = "ON";
 }
 else
 {
  digitalWrite(button_pin,LOW); //LED OFF
  curr_state = "OFF";  
 }
 
 server.send(200, "text/plane", curr_state); //Send state back to page
}

// handling PWM: 

void handle_pwm() {
 String pwm_val = server.arg("PWMval"); // reading from slider on html pagae
 Serial.print("slider val: ");
 Serial.println(pwm_val);
 analogWrite(PWM_pin,pwm_val.toInt()); // chaning the value on the NodeMCU board
 server.send(200,"text/plane","0"); // handling the webpage update
}


// setup for server and NodeMCU pins

void setup(void){
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);     //Connect to your WiFi router using ssid and pwd given above
  Serial.println("");

  // choose output for both PWM and button pins
  pinMode(PWM_pin,OUTPUT);
  pinMode(button_pin,OUTPUT); 

  // Connection wait
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // print some parameters pertaining to server IP etc.
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  // IP address given to NodeMCU
 
  server.on("/", handle_root);      // primary page where html from .h file will be shown
  server.on("/setPWM", handle_pwm); // handles the PWM values
  server.on("/setButton", handle_button); // handles button values

  server.begin();                  // begin server
  Serial.println("HTTP server started");
}

// loop for constant update of server pages
void loop(void){
  server.handleClient();          //Handle tapping of buttons and sliders
}