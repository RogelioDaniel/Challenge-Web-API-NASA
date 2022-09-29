function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages:'es'
    }, 'google_translate_element');
    setTimeout(function(){
      var select = document.querySelector('select.goog-te-combo');
      select.value    = "es"; 
      select.dispatchEvent(new Event('change'));
    },1000)
  }