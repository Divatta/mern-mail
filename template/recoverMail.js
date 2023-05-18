const recoveryTemplate = (email,token) => {
    return `<div>
            <h1 style="color:slateblue;">Hi, ${email}, Welcome to Project Name,</h1>
            <article style="margin:auto;object-fit:cover;">
                
                <h4> We received the request to reset the password for your account, 
                    <br/>To Reset your password, Click on the Link below:
                </h4>
                <a href="/recovery/${token}" target="_blank" style="background:green;color:white;padding:10px 12px;">Reset Password</a>
                <hr/>
                <p>
                    <strong>Or copy and paste the URL into your Browser,</strong>
                </p>

                <a href="/recovery/${token}" target="_blank">${token}</a>
            </article>

    </div>`
}

module.exports = recoveryTemplate