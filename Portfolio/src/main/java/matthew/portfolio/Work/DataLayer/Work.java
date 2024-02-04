package matthew.portfolio.Work.DataLayer;


import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "works")
public class Work {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String workId;
    private String workTitle;
    private String workPlaceName;
    private String location;

    @Enumerated(EnumType.STRING)
    private Type type;

    private String duration;

    @Enumerated(EnumType.STRING)
    private Status status;
    private String description;


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


