document.addEventListener("DOMContentLoaded", function () {
    var mainElement = document.querySelector('.main');
    var infoElement = document.querySelector('.info');

    
    document.getElementById("home").addEventListener("click", function (event) {
        event.preventDefault();
        mainElement.classList.add('show-info');
        infoElement.innerHTML =`
            <br><br><h3> Hello there... I'm<span> Arpita.</span></h3><br>

                <p>Welcome to my Homepage !!</p>
                `;

                infoElement.classList.add('js-output');
    });

                // About page
                document.getElementById("about").addEventListener("click", function (event) {
                    event.preventDefault();
                mainElement.classList.add('show-info');
                infoElement.innerHTML =`
                <br><p><h4>I am a Student currently in last year ,Btech.<h4></p><br>
                    <p><h4>I am a Web Designer having experience in: <h4></p><br>
                        <p>HTML</p><br><p>CSS</p><br><p>Java Script</p></h3>
` ;
                            infoElement.classList.add('js-output');
    });

                            // Skills page
                            document.getElementById("skills").addEventListener("click", function (event) {
                                event.preventDefault();
                            mainElement.classList.add('show-info');
                            infoElement.innerHTML =`
                            <p>Here are my skills:</p><br>
                                <ul><br>
                                    <li>Python</li><br>
                                        <li>Core Java</li><br>

                                            <li>HTML</li><br>
                                                <li>CSS</li><br>
                                                    <li>Javascript</li><br>
                                                        <li>UI/UX Design</li>
                                                    </ul>
                                                   ` ;
                                                    infoElement.classList.add('js-output');
    });

                                                    // Works page
                                                    document.getElementById("works").addEventListener("click", function (event) {
                                                        event.preventDefault();
                                                    mainElement.classList.add('show-info');
                                                    infoElement.innerHTML =`
                                                   <br><br> <br><p>Check out my previous <br>works and projects.</p>
                                                        `;
                                                        infoElement.classList.add('js-output');
    });

                                                        // Contact page
                                                        document.getElementById("contact").addEventListener("click", function (event) {
                                                            event.preventDefault();
                                                        mainElement.classList.add('show-info');
                                                        infoElement.innerHTML =`
                                                        <br><p>Feel free to Contact and Collaberation ^~^ </p><br>
                                                            <br><p><h4>email id: arpita1234@gmail.com </h4></p><br>
                                                                <p><h4>contact no: 9123456789 </h4></p><br>
                                                                   ` ;
                                                                    infoElement.classList.add('js-output');
    });
});