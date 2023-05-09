import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div>
    <form class="row justify-content-center mb-3 mt-5 form-login" id="login-form">
        <div id="logBox" class=" rounded-3" style= {{width:500, height:340}}>
            <h2 class="mt-3">Contact</h2>

            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input class="form-control" type="name" placeholder="Enter name" id="name-login"
                    name="name" />
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Email:</label>
                <input class="form-control" type="email" placeholder="Enter email" id="email-login" name="email"/>
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Message:</label>
                <textarea class="form-control" type="text" placeholder="Enter message" id="message-login" name="message" style= {{height:200}}/>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary btn-submit" id="signIn-btn" type="submit">Submit</button>
            </div>
        </div>
    </form>
</div>
    </div>
  );
}
