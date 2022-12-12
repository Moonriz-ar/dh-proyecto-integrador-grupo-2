package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.BookingDTO;
import final_project_group_2.WebApplication.models.Booking;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface IBookingService {
    
    List<BookingDTO> listBookings();

    // ResponseEntity<?> findById(Integer id);

    Set<BookingDTO> listByUserId(Integer userId);

    ResponseEntity<?> addNewBooking(Booking booking);

<<<<<<< HEAD
    Set<BookingDTO> listByUserId(Integer userId);
=======
    Set<BookingDTO> listByCarId(Integer carId);
>>>>>>> f3afb314d0e37b66ace2569f035cc7458b7425e5

    // ResponseEntity<?> deleteBooking(Integer id);

    // ResponseEntity<?> updateBooking(Image image);
}
