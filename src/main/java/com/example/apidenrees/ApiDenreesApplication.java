package com.example.apidenrees;

import com.example.apidenrees.Model.Administrateur;

import com.example.apidenrees.ServiceImpl.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiDenreesApplication implements CommandLineRunner{
    @Autowired
    AdminServiceImpl adminServiceImpl;

    public static void main(String[] args) {
        SpringApplication.run(ApiDenreesApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // TODO Auto-generated method stub
        Administrateur administrateur = new Administrateur("Sidibe","Fadiala","fadialasidibe9@gmail.com","fad","fad123",Etat.ACTIVER,72120680, false);
       adminServiceImpl.addAdmin(administrateur);
    }

}
