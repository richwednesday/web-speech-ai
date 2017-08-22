# Demo: A Simple Voice AI Bot with Web Speech API and Node.js
# Live version at  https://web-speech-ai-ctirevqbqf.now.sh

This demo uses the experimental Web Speech API, which is currently only [supported](http://caniuse.com/#search=speech) by Blink-based browsers including Chrome 25+, Opera 27+, Samsung Internet, QQ Browser, and Baidu Browser.


This is how this web app works:

1. Using the Web Speech API’s `SpeechRecognition` interface to listen your voice from a microphone
2. Send your message to [API.ai](https://api.ai) - Now using [CleverBot Api](https://cleverbot.com) (the natural language processing platform) as a text string
3. Once the AI from the CLEVERBOT returns the reply text back, use the `SpeechSynthesis` interface to give it a synthetic voice.



