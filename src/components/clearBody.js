export const clearBody = () => {
    const childNodes = [...document.body.childNodes];
    
    childNodes.forEach((node) => {
      if (node.tagName !== "SCRIPT") {
        node.remove();
      }
    });
};