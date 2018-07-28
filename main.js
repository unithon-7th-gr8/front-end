/* A convenience function to reverse a string, and 
 * one to set the content of an element.
 */
 
function reverse(s){return s.split('').reverse().join('')}
 
function set(el,text){
 while(el.firstChild)el.removeChild(el.firstChild);
 el.appendChild(document.createTextNode(text))}
 
/* setupUpdater will be called once, on page load.
 */
 
function setupUpdater(){
 var input=document.getElementById('input-price')[0]
   , orig=document.getElementById('price-total')
   , oldText=input.value
   , timeout=null;
 
/* handleChange is called 50ms after the user stops 
   typing. */
 function handleChange(){
  var newText=input.value;
  if (newText==oldText) return; else oldText=newText;
  set(orig, newText);
 }
 
/* eventHandler is called on keyboard and mouse events.
   If there is a pending timeout, it cancels it.
   It sets a timeout to call handleChange in 50ms. */
 function eventHandler(){
  if(timeout) clearTimeout(timeout);
  timeout=setTimeout(handleChange, 50);
 }
 
 input.onkeydown=input.onkeyup=input.onclick=eventHandler;
}
 
setupUpdater();
document.getElementById('input-price')[0].focus();
