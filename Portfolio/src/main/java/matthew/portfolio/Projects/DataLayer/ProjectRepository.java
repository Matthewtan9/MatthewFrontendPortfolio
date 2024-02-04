package matthew.portfolio.Projects.DataLayer;

import matthew.portfolio.Work.DataLayer.Work;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
