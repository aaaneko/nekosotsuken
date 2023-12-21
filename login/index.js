// Google Sign-In APIの初期化
function initializeGoogleSignIn() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID', // ここに実際のクライアントIDを入力
        });
        renderGoogleSignInButton();
    });
}

// Google Sign-In ボタンの描画
function renderGoogleSignInButton() {
    gapi.signin2.render('google-login-btn', {
        'scope': 'profile email',
        'width': 240,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onGoogleSignIn,
        'onfailure': onGoogleSignInFailure
    });
}

// Googleアカウントでログイン成功時の処理
function onGoogleSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    // ここにログイン成功時の処理を追加
}

// Googleアカウントでログイン失敗時の処理
function onGoogleSignInFailure(error) {
    console.error('Google Sign-In Failed:', error);
    // ここにログイン失敗時の処理を追加
}

initializeGoogleSignIn();
