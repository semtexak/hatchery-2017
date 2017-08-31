package cz.unicorn.tga.tractor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.*;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;

@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@ComponentScan(value = "cz.unicorn.tga.tractor")
public class TractorApplication {

	public static void main(String[] args) {
		SpringApplication.run(TractorApplication.class, args);
	}

	@Bean
	public HibernateJpaSessionFactoryBean sessionFactory() {
		return new HibernateJpaSessionFactoryBean();
	}
}
