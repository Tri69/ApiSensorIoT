#include<ESP8266WiFi.h>
#include<HTTPClient.h>
#include<ArduinoJson.h>

const char* ssid = "Vivo";
const char* password = "12345678";
const char* serverApi = "https://api-sensor-iot.vercel.app";
const int pinSensorTanah = A0;
const long intervalPengiriman = 5000;
unsigned long waktuTerakhir = 0;

void setup() {
	Serial.begin(9600);
	WiFi.begin(ssid, password);
}
void loop() {
	m
}
