class FuturisticWriter extends TemplateWordWriter{
    options = [
        {x:'100px', y:'0px'},
        {x:'-100px',y:'0px'},
        {x:'0px', y:'100px'},
        {x:'0px', y:'-100px'}
    ];
        
    addStyle(word, duration){
        let translation = this.generateRandomTranslation();
    
        word.classList.add("futuristic-text");
        word.style = `--x:${translation.x}; --y:${translation.y}`;
    }

    generateRandomTranslation() {
        return this.options[Math.round(Math.random() * 3)];
    }
}
