package com.drill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.drill.domain.User;
import com.drill.dto.ResUserDto;
import com.drill.svc.UserService;

@Controller
public class UserController {
	

	@Autowired
	private UserService userService;
	
	// 회원가입
	@GetMapping("/join")
	public String join() {
		return "user/join";
	}


	@PostMapping("/join")
	public @ResponseBody ResUserDto<?> postJoin(@RequestBody User user) {
		userService.join(user);
		return new ResUserDto<>(HttpStatus.OK.value(), user.getUserid() + " 회원가입 완료!");
	}
	
}
