package matthew.portfolio.Classes.DataLayer;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "classes")
public class Class {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String classId;
    @Enumerated(EnumType.STRING)
    private Semester semester;
    private String className;
    private String teacherName;
    private String skills;
    private String description;
}