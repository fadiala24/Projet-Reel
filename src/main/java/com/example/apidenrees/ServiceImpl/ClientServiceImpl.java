package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.*;
import com.example.apidenrees.Repositories.ClientRepository;
import com.example.apidenrees.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {
       @Autowired
    ClientRepository clientRepository;

    @Override
    public Client ajout_Client(Client client, @RequestParam("image") MultipartFile multipartFile) throws IOException {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        client.setPhoto(fileName);
        Client savedClient = clientRepository.save(client);
        String uploadDir = "src/main/resources/Client/" + savedClient.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return savedClient;
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

