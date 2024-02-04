package matthew.portfolio.Users.PresentationLayer;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDTO {

    private String firstName;
    private String lastName;
    private String age;
    private String email;



    public static String generateUUIDString(){
        return UUID.randomUUID().toString();
    }
}

