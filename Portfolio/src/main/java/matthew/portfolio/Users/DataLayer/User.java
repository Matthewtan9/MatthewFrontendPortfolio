package matthew.portfolio.Users.DataLayer;



import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String userId;
    private String firstName;
    private String lastName;
    private String age;
    private String email;


//
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName =lastName;
//    }
//
//
//    public String getAge() {
//        return age;
//    }
//
//    public void setAge(String age) {
//        this.age =age;
//    }
//
//
//    public String getEmail(String email) {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email =email;
//    }

}


