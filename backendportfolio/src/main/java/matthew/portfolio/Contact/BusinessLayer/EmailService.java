//package matthew.portfolio.Contact.BusinessLayer;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.MailException;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//
//    private final JavaMailSender emailSender;
//    private final String fromAddress = "matthew999099@gmail.com"; // Set your email address
//
//    @Autowired
//    public EmailService(JavaMailSender emailSender) {
//        this.emailSender = emailSender;
//    }
//
//    public void sendEmail(String to, String senderEmail, String subject, String text) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(senderEmail); // Set the sender's email as the "from" address
//        message.setTo(to);
//        message.setSubject(subject);
//        message.setText(text);
//
//        try {
//            emailSender.send(message);
//        } catch (MailException e) {
//            // Handle exception
//        }
//    }
//
//}