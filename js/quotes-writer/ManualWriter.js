class ManualWriter extends  TemplateWordWriter{
    addStyle(word, duration){
        word.classList.add("writed-text");
        word.style = `--write-duration: ${duration}s`;
    }
}
