package lk.ijse.dep11.student.api;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lk.ijse.dep11.student.to.StudentTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PreDestroy;
import javax.validation.Valid;

@RestController
@RequestMapping("/students")
public class studentHttpController {

    private final HikariDataSource pool;

    public studentHttpController(){
        HikariConfig config = new HikariConfig();
        config.setUsername("postgres");
        config.setPassword("123");
        config.setJdbcUrl("jdbc:postgres://localhost:8080/dep11_to_do_app");
        config.setDriverClassName("org.postgresql.Driver");
        config.addDataSourceProperty("maximumPoolSize", 10);
        pool = new HikariDataSource(config);
    }
    @PreDestroy
    public void destroy(){
        pool.close();
    }

    //Create - Post
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping( produces = "application/json", consumes = "application/json")
    public StudentTO createStudent(@RequestBody @Valid StudentTO student){
        System.out.println("createStudent()");
        return null;
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(value = {"/id"} , consumes = "application/json")
    public String deleteStudent(){
        System.out.println("deleteStudent()");
        return "deleteStudent";
    }

    //Update = Patch
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping(value = {"/id"} , consumes = "application/json")
    public String updateStudent(@RequestBody @Valid ){
        System.out.println("updateStudent()");
        return "null";
    }

    //Get one Student Detail-Retrieve
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = {"/id"} , produces = "application/json")
    public String getStudent(){
        System.out.println("getStudent()");
        return "getStudent";
    }

    //Get All Student Detail-Retrieve
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(consumes = "application/json")
    public String getAllStudent(){
        System.out.println("getAllStudent()");
        return "getAllStudent";
    }
}
