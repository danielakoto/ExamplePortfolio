import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Profile")
    }

    async getHtml() {
        return `
        <a href="" target="_blank">
        <div class="profile">
        <center>
            <div class="whitebox2">
                <img style="border-radius: 5%; width: 25%; margin-top: 30px;" src="/static/pictures/profile.png" alt="">
                <h1 style="font-size: 28px;">Name</h1>
                <h3>Example University</h3>
                <h3 style="font-size: 22px; margin-bottom: 5px;">Occupation</h3>
                <p>Exxample description...</p>
                <h4 style="font-family: 'Source Sans Pro', sans-serif; float: left; font-style: italic; margin-left: 4%;">location</h4>
                <h4 style="font-family: 'Source Sans Pro', sans-serif; float: right; font-style: italic; margin-right: 4%;">email@gmail.com</h4>
                <br>
                <div style="margin-bottom: 30px;"></div>
            </div>
        </center>
        </div>
        </a>
        `;
    }
}