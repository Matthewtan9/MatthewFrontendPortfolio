////package matthew.portfolio.Contact.PresentationLayer;
////
////import lombok.extern.slf4j.Slf4j;
////import matthew.portfolio.Contact.DataLayer.EmailForm;
////import org.springframework.http.HttpStatus;
////import org.springframework.http.ResponseEntity;
////import org.springframework.mail.MailException;
////import org.springframework.mail.SimpleMailMessage;
////import org.springframework.mail.javamail.JavaMailSender;
////import org.springframework.web.bind.annotation.CrossOrigin;
////import org.springframework.web.bind.annotation.PostMapping;
////import org.springframework.web.bind.annotation.RequestBody;
////import org.springframework.web.bind.annotation.RestController;
////
////@Slf4j
////@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = {"xsrf-token", "content-type"})
////@RestController
////public class EmailController {
////
////    private final JavaMailSender emailSender;
////
////    public EmailController(JavaMailSender emailSender) {
////        this.emailSender = emailSender;
////    }
////
////    @PostMapping("/api/send-email")
////    public ResponseEntity<String> sendEmail(@RequestBody EmailForm emailForm) {
////        SimpleMailMessage message = new SimpleMailMessage();
////        message.setFrom(emailForm.getSenderEmail()); // Use sender's email as From address
////        message.setTo(emailForm.getTo());
////        message.setSubject(emailForm.getSubject());
////        message.setText(emailForm.getMessage());
////
////        try {
////            emailSender.send(message);
////            return ResponseEntity.ok("Email sent successfully");
////        } catch (MailException e) {
////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending email: " + e.getMessage());
////        }
////    }
////}
//package matthew.portfolio.Contact.PresentationLayer;
//
//import lombok.extern.slf4j.Slf4j;
//import matthew.portfolio.Contact.BusinessLayer.EmailService;
//import matthew.portfolio.Contact.DataLayer.EmailForm;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.mail.MailException;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@Slf4j
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = {"xsrf-token", "content-type"})
//@RestController
//public class EmailController {
//
//    private final EmailService emailService;
//
//    public EmailController(EmailService emailService) {
//        this.emailService = emailService;
//    }
//
//    @PostMapping("/api/send-email")
//    public ResponseEntity<String> sendEmail(@RequestBody EmailForm emailForm) {
//        try {
//            emailService.sendEmail(emailForm.getTo(), emailForm.getSenderEmail(), emailForm.getSubject(), emailForm.getMessage());
//            return ResponseEntity.ok("Email sent successfully");
//        } catch (MailException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending email: " + e.getMessage());
//        }
//    }
//}
