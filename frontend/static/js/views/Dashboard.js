import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <center>
        <div class="row" style="margin-top:15%;">
            <div class="col-1">
                <img style="border-radius: 5%; border: solid 3px white; width: 30%;" src="/static/pictures/profile.png" alt="">
                <h1>Hi, I'm Example</h1>
                <h4>Example Occupation at Example University.</h4>
            </div>
        </div>
        </center>

        <center>
        
        <div class="col-2">
            
                <ul class="skills" style="margin-top:10px; ">
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">Java</p>
                    </li>
                    <li style="margin:0px;">
                    <img src="https://img.icons8.com/ios-filled/96/000000/html-5--v2.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">HTML</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/css3.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">CSS</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">JavaScript</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/python--v1.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">Python</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/firebase.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">Firebase</p>
                    </li>
                </ul>
        </div>
        
        
        <!-- this is the layout for all your projects, edit to fit your needs -->
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="">
            <img src="/static/pictures/1722-img.jpg" alt="" style="width: 100%;">
            <h1>Example Project</h1>
            <p>Example description...</p>
            </a>
        </div> 
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="">
            <img src="/static/pictures/1723-img.jpg" alt="" style="width: 100%;">
            <h1>Example Project 2</h1>
            <p>Example description...</p>
        </a>
        </div>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="">
            <img src="/static/pictures/1721-img.jpg" alt="" style="width: 100%;">
            <h1>Example Project 3</h1>
            <p>Example description...</p>
        </a>
        </div>
        </center>
        <br>
        <br>
        `;
    }
}