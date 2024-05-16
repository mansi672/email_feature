/**
 * @since  1.0
 */
// Define sendEmail function
function sendEmail(emailAddress, emailSubject, emailBody) {
    // Send message to background script
    chrome.runtime.sendMessage({
        action: 'sendEmail',
        email: {
            to: emailAddress,
            subject: emailSubject,
            body: emailBody
        }
    });
}

document
    .addEventListener('DOMContentLoaded', function () {

        document
            .getElementById('refrech-result')
            .addEventListener('click', refrech, false)
        document
            .getElementById('copy')
            .addEventListener('click', copy, false)

        document
            .getElementById('download-csv')
            .addEventListener('click', downloadCsv, false)
        document
            .getElementById('download-txt')
            .addEventListener('click', downloadTxt, false)

        document
            .getElementById('send-email')
            .addEventListener('click', sendEmail, false)

        refrech(false)
    }, false);
