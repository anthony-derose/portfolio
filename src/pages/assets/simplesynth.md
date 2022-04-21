### simple noise synth

The code basee of this project can be found here: [https://github.com/anthony-derose/youtube-sampler](https://github.com/anthony-derose/youtube-sampler).

This project was made using C++ and the JUCE framework. Although simple, I learned a lot about how audio is processed in JUCE and in an audio plugin in general. Specifically, how an audio stream might go from setting the audio channels to prepareToPlay() to getNextAudioBlock() and then finally to releasing the audio. 

This function of code is the most interesting and my main input to creating the simple noise synth. 

<img classname="centerimg" src="/simplesynthimage.png" width="400"/>

This function uses pointers to fill buffers with randomly generated noise samples between  -0.125 Hzand +0.125 Hz.

If you were to run this plugin, you would just hear white noise. 
