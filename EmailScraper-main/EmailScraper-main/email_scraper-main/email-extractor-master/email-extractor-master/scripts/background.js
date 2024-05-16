chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendResponse({ content: document.documentElement.innerHTML, options: request });
});// Listen for messages from popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'sendEmail') {
        // Extract email details from message
        const { to, subject, body } = request.email;

        // Implement email sending logic here
        // For example, you can use a third-party email API or service
        // Replace the following line with your email sending code
        console.log('Sending email to:', to);
        console.log('Subject:', subject);
        console.log('Body:', body);

        // Respond to the popup script
        sendResponse({ status: 'Email sent successfully' });
    }
});

