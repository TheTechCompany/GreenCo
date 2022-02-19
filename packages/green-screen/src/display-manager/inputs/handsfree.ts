// export default = `

// `

export default `(() => {
    alert("Handsfree")
    const ws = new WebSocket('ws://localhost:8000');

    let pointer;

    const updatePointer = (position, gesture) => {
        if(!pointer){
            pointer = document.createElement('div')
            pointer.id = 'green-screen-pointer'
            pointer.classList.add('pointer')
            pointer.style.position = 'absolute';
            document.body.appendChild(pointer)
        }

        switch(gesture){
            case 'Open':
            case 'Pointer':
                pointer.innerHTML = '
                <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">
<g>
	<path d="M382.5,69.429c-7.441,0-14.5,1.646-20.852,4.573c-4.309-23.218-24.7-40.859-49.148-40.859
		c-7.68,0-14.958,1.744-21.467,4.852C285.641,16.205,265.932,0,242.5,0c-23.432,0-43.141,16.206-48.533,37.995
		c-6.508-3.107-13.787-4.852-21.467-4.852c-27.57,0-50,22.43-50,50v122.222c-6.129-2.686-12.891-4.187-20-4.187
		c-27.57,0-50,22.43-50,50V354c0,72.233,58.766,131,131,131h118c72.233,0,131-58.767,131-131V119.429
		C432.5,91.858,410.07,69.429,382.5,69.429z M402.5,354c0,55.691-45.309,101-101,101h-118c-55.691,0-101-45.309-101-101V251.178
		c0-11.028,8.972-20,20-20s20,8.972,20,20v80h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30V50
		c0-11.028,8.972-20,20-20c11.028,0,20,8.972,20,20v191.178h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30v-121.75
		c0-11.028,8.972-20,20-20s20,8.972,20,20V354z"/>
</g><g></g>
<g></g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>'
                break;
            case 'Close':
                pointer.innerHTML = '
                <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 449.406 449.406" style="enable-background:new 0 0 449.406 449.406;" xml:space="preserve">
<g>
	<path d="M83.703,141.5c0-61.481,50.019-111.5,111.5-111.5s111.5,50.019,111.5,111.5c0,7.208-0.709,14.473-2.107,21.596l29.438,5.78
		c1.771-9.023,2.67-18.233,2.67-27.376c0-78.023-63.477-141.5-141.5-141.5s-141.5,63.477-141.5,141.5
		c0,32.037,11.021,63.434,31.031,88.406l23.41-18.76C92.155,191.191,83.703,167.108,83.703,141.5z"/>
	<path d="M195.203,80c33.911,0,61.5,27.589,61.5,61.5h30c0-50.453-41.047-91.5-91.5-91.5s-91.5,41.047-91.5,91.5
		c0,15.842,4.138,31.479,11.966,45.223l26.068-14.849c-5.256-9.227-8.034-19.73-8.034-30.374C133.703,107.589,161.292,80,195.203,80
		z"/>
	<path d="M354.203,215.951c-4.623,0-9.071,0.76-13.228,2.161c-5.117-17.12-21.011-29.635-39.772-29.635
		c-4.887,0-9.576,0.855-13.934,2.414c-5.755-16.018-21.092-27.507-39.066-27.507c-3.99,0-7.845,0.578-11.5,1.634V141.5
		c0-22.883-18.617-41.5-41.5-41.5s-41.5,18.617-41.5,41.5v87.36c-3.655-1.056-7.51-1.634-11.5-1.634
		c-22.883,0-41.5,18.617-41.5,41.5v77.851c0,56.7,46.129,102.829,102.828,102.829h89.344c56.699,0,102.828-46.129,102.828-102.829
		v-89.126C395.703,234.568,377.086,215.951,354.203,215.951z M365.703,346.578c0,40.158-32.671,72.829-72.828,72.829h-89.344
		c-40.157,0-72.828-32.671-72.828-72.829v-77.851c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5v60.572h30V141.5
		c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5v63.384v44.022v8.545h30v-8.545v-44.022c0-6.341,5.159-11.5,11.5-11.5
		s11.5,5.159,11.5,11.5v52.567h30v-27.474c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5v27.474h30
		c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5V346.578z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                '
                break;
        }

        pointer.style.background = 'red';

        pointer.style.height = '50px';
        pointer.style.width = '50px';
        pointer.style.left = position.x + 'px';
        pointer.style.top = position.y + 'px';

        // pointer.innerHTML = gesture;
    }

    const removePointer = () => {
        if(pointer){
            document.body.removeChild(pointer)
            pointer = undefined;
        }
    }

    ws.addEventListener('open', () => {
        alert("Conencted to mouse")
    })

    ws.addEventListener('message', (msg) => {
        const data = JSON.parse(msg.data)

        let position = data.position[0] || [];
        let gesture = data.gesture;

        switch(gesture){
            case 'Close':
                
                break;
            case 'Open':
            case 'Pointer':
                break;
            case 'no_hand':
                removePointer()
                break;
            default:
                break;
        }

        updatePointer({
            x: position[0] + ((position[2] - position[0]) / 2),
            y: position[1] + ((position[3] - position[1]) / 2)
        }, gesture);
    })
})();
`
