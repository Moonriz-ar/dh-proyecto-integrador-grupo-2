package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRepository extends JpaRepository<Car, Integer> {
    
}
