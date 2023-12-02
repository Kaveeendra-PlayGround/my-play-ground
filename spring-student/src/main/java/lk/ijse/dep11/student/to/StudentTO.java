package lk.ijse.dep11.student.to;

import jdk.jfr.DataAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Pattern;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentTO implements Serializable {
    @Null(message = "id should be empty")
    private Integer id;

    @NotBlank(message = "name should not be empty")
    @Pattern(regexp = "^[A-Za-z ]+$" , message = "Invalid Name")
    private String name;


    @NotBlank(message = "address should not be empty")
    @Length(min=4 , message = "Invalid Address")
    private String address;

    @Pattern(regexp = "^[\\d{3}-\\d{7}]$", message = "Invalid Contact")
    private String contact;

}
