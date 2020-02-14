function TDK(selector){
    //select dom element 
    const ele = document.querySelector(selector)
    const self = {
        element :  ele,
        //add or get text between element body
        outText : (val) => {
            if(val){
                self.element.textContent =  val;
                return self.element.textContent;
            }else{
                return self.element.textContent;
            }
            
        },
        //add or get html code between element body
        outHtml: (val) => {
            if(val){
                self.element.innerHTML = val;
                return self.element;
            }else{
                return self.element;
            }
            
        },
        //add or get text to input element
        outVal: (val) => {
            if(val){
                self.element.value = val;
                return self.element.value;
            }else{
                return self.element.value;
            }
            
        },
        //set attribute to html element
        putAttr : (att,val) => {
            self.element.setAttribute(att,val);
            return self.element;
        },
        //get value of attribute
        getAttr: (att) => {
            return self.element.getAttribute(att);
        },
        //remove attribute from html element
        remAttr: (att) => {
            if(self.element.hasAttribute(att)){
                self.element.removeAttribute(att);
            }
            return self.element;
        },
        //add class to html element 
        decorateAddClass: (clas) => {
            self.element.classList.add(clas);
            return self.element;
        },
        //remove class to html element 
        decorateRemClass: (clas) => {
            self.element.classList.remove(clas);
            return self.element;
        },
        //toggle class to html element 
        decorateToggleClass: (clas) => {
            self.element.classList.toggle(clas);
            return self.element;
        },
        //add text before node as first child node
        preConcatText: (child) => {
            self.element.prepend(child);
            return self.element;  
        },
        //add text after last child node
        postConcatText: (child) => {
            self.element.append(child);
            return self.element;  
        },
        //add child node before node as first child node
        preConcatChild: (child) => {
            var temp = self.element.innerHTML;
            self.element.innerHTML = child + temp;
            return self.element;  
        },
        //add child node after last child node
        postConcatChild: (child) => {
            var temp = self.element.innerHTML;
            self.element.innerHTML = temp + child;
            return self.element;  
        },
        //remove all child nodes or empty parent node
        nullChild: () => {
            while (self.element.firstChild) {
                self.element.removeChild(self.element.firstChild);
            }
            return  self.element;
        },
        //remove an element
        ridParent: () => {
            self.element.remove();
        },
        viw : (speed, callback) => {
            if(speed && !callback){
                
            }
            else if(speed && callback){

            }
            else{

            }

        },
        

    }
   
    
    return self;
}

console.log(TDK("#ider").outText());
console.log(TDK("#ider").outText("ff hh "));
console.log(TDK("#ider").outHtml("<b>gg<b/>"));
console.log(TDK("#ider").outHtml());
TDK("input").outVal("TTTTTT");
console.log(TDK("input").outVal());
TDK("#ider").putAttr("kkl","op");
console.log(TDK("#ider").getAttr("kkl"));


function kkk(){
    TDK("#boxer").decorateToggleClass("pp");
}

TDK("#ider").preConcatText("-------");
TDK("#ider").postConcatText("++++++++++++++++");

TDK("#clas").preConcatChild("<b>kk</b>");
TDK("#clas").postConcatChild("<b>ll</b>");

TDK("#clas").nullChild();

TDK("p").ridParent();