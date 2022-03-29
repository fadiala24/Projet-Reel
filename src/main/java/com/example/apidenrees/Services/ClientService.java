package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.Client;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ClientService {

    public Client ajout_Client(Client client, MultipartFile image) throws IOException;
    public String valid (Client client);
    public List<Client> listClient();
    public Client getClientById(Long id);
    public String supprimer_client(Long id);
    public String modifier_client(Client client, Long id);
    public Client modifyPassword(Long id, String ancien, String nouveau);
    //Authentification
    Client findByLoginAndPassword(String login, String password);


}
