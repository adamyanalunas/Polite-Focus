Polite Focus
===

Don't be rude to your users. Let them decide what to focus on.
---

This is a nice way of asking the browser to give you focus of a form field. Better yet, it's simple. If no other field has focus, you can have it. If some other field has focus, leave it there.


Example!
===
    <form action="" method="post">
        <fieldset id="your_login_form" class="">
            <legend>Your login form</legend>
            
            <label for="username">Username</label><input type="text" name="username" value="" id="username">
            <br>
            <label for="password">Password</label><input type="password" name="password" value="" id="password">
        </fieldset>
        
        <p>
            <button type="submit">Login</button>
        </p>
    </form>
    
    <script>
    /* <![CDATA[ */
        $('#username').politeFocus();
    /* ]]> */
    </script>
    
