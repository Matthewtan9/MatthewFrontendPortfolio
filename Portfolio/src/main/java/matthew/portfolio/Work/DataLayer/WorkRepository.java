package matthew.portfolio.Work.DataLayer;

import matthew.portfolio.Users.DataLayer.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkRepository extends JpaRepository<Work, Integer> {
}
