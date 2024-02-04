package matthew.portfolio.Projects.DataLayer;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String projectId;
    private String projectName;
    private String projectDescription;
    private String projectDuration;

    @Enumerated(EnumType.STRING)
    private ProjectType projectType;
    private String projectSkill;
    private String githubLink;




}
