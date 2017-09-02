package cz.unicorn.tga.tractor.access;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomUser implements ApplicationUser {

	private String login = null;

	private String name;
	private String surname;
	private String email;

}
