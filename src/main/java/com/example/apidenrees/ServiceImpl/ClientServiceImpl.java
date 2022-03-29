package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Repositories.ClientRepository;
import com.example.apidenrees.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {
       @Autowired
    ClientRepository clientRepository;


    @Override
    public String aujout_client(Client client) {
        clientRepository.save(client);
        return "Ajout effectué avec succes";
    }
    @Override
    public String valid (Client client){
        Optional<Client>ClientTelephone = clientRepository.findByTelephone(client.getTelephone());
        Optional<Client>ClientLogin = clientRepository.findByLogin(client.getLogin());

        if (ClientTelephone.isPresent()){
            System.out.println("telephone");
            return "telephone";
        }else
        if (ClientLogin.isPresent()){
            System.out.println("client");
            return "client";
        }
        else {
            return "rien";
        }
    }


    @Override
    public List<Client> listClient() {
        return clientRepository.findAll();
    }

    @Override
    public Client getClientById(Long id) {
        return clientRepository.findById(id).get();
    }

    @Override
    public String supprimer_client(Long id) {
        Client client = clientRepository.findById(id).get();
        return "Vous avez supprimer le Client : "+client.getNom()+" "+client.getPrenom();
    }
    @Override
    public void activerClient(Long id){
        Client client=clientRepository.findById(id).get();
        client.setEtat(Etat.ACTIVER);
    }

    @Override
    public void desactiverClient(Long id){
        Client client=clientRepository.findById(id).get();
        client.setEtat(Etat.DESACTIVER);
    }
    @Override
    public String modifier_client(Client client, Long id) {
        Client clientExistant = this.clientRepository.findById(id).get();

        clientExistant.setNom(client.getNom());
        clientExistant.setPrenom(client.getPrenom());
        clientExistant.setLogin(client.getLogin());
        clientExistant.setPassword(client.getPassword());
        clientExistant.setTelephone(client.getTelephone());
        clientExistant.setEtat(client.getEtat());
        return "Client modifié avec succes";
    }

    @Override
    public Client modifyPassword(Long id, String ancien, String nouveau) {
        Client client = clientRepository.findById(id).get();
        if (ancien.equals(client.getPassword())){
            client.setPassword(nouveau);
            System.out.println(nouveau);
            return clientRepository.save(client);
            //return"Modifcation effectuer avec succes";
        }else{
            return client;
        }

    }

    @Override
    public Client findByLoginAndPassword(String login, String password) {
        Optional<Client> optionalClient = clientRepository.findByLoginAndPassword(login,password);
        if(optionalClient.isEmpty()){
            return optionalClient.orElse(null);
        }
        if (optionalClient.get().getEtat()== Etat.DESACTIVER){
            throw new IllegalStateException("Le compte est desactivé");
        }
        return optionalClient.get();
    }
}

