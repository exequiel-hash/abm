package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@EntityScan(basePackages = "com") 
// @EnableJpaRepositories(value = "com.repository")
@SpringBootApplication
public class AbMpersonasApplication {

	public static void main(String[] args) {
		SpringApplication.run(AbMpersonasApplication.class, args);
	}

	// CORS permission config.
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("*")
                        .allowedHeaders("*");
            }
        };
    }

}
