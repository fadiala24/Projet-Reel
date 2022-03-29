package com.example.apidenrees.ServiceImpl;


import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Repositories.BoutiqueRepository;
import com.example.apidenrees.Repositories.BoutiquierRepository;
import com.example.apidenrees.Services.BoutiquierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BoutiquierServiceImpl implements BoutiquierService {
    @Autowired
    BoutiquierRepository boutiquierRepository;

    @Autowired
    BoutiqueRepository boutiqueRepository;
    @Autowired
    BoutiqueServiceImpl boutiqueServiceImpl;

    @Override
    public String aujout_boutiquier(Boutiquier boutiquier) {
        Optional<Boutiquier> BoutiquierTelephone = boutiquierRepository.findByTelephone(boutiquier.getTelephone());
        Optional<Boutiquier> BoutiquierLogin = boutiquierRepository.findByLogin(boutiquier.getLogin());
        Optional<Boutiquier> BoutiquierPassword = boutiquierRepository.findByPassword(boutiquier.getPassword());

        if (BoutiquierTelephone.isPresent()){
            System.out.println("telephone");
            return "telephone";
        }
        else if (BoutiquierLogin.isPresent()){
            System.out.println("login");
            return "login";
        }
        else if (BoutiquierPassword.isPresent()){
            System.out.println("password");
            return "password";

        }

        else {
            return "rien";
        }
    }
    @Override
    public Boutiquier addBoutiquier(Boutiquier boutiquier) {
        return boutiquierRepository.save(boutiquier);
    }

    @Override
    public String restoreBoutiquier(Long id, Long idBoutiquier) {
        Boutiquier boutiquier = boutiquierRepository.findById(id).get();

        boutiquier.setSupprimer(false);
        boutiquier.setEtat(Etat.ACTIVER);
        return "Vous avez restauré le boutiquier " + boutiquier.getPrenom() + " " + boutiquier.getNom();
    }

    @Override
    public void desactiverBoutiquier(Long id) {
       Boutiquier boutiquier=boutiquierRepository.findById(id).get();
       List<Boutiques> list = boutiqueRepository.findBoutiquesByBoutiquier(id);
      /*  for (int i=0; i < list.size(); i++){

            Boutiques boutiques = list.get(i);
            boutiques.setEtat(Etat.DESACTIVER);
            boutiqueRepository.save(boutiques);
        }*/
        for (Boutiques b:list
             ) {
            b.setEtat(Etat.DESACTIVER);
            boutiqueRepository.save(b);
            System.out.println(b.getEtat());
        }
        boutiquier.setEtat(Etat.DESACTIVER);
        boutiquierRepository.save(boutiquier);

    }

    @Override
    public List<Boutiquier> listBoutiquier() {
        return boutiquierRepository.findAll();
    }

    @Override
    public Boutiquier getBoutiquierById(Long id) {
        return boutiquierRepository.findById(id).get();
    }

    @Override
    public String supprimer_boutiquier(Long id) {
        Boutiquier boutiquier = boutiquierRepository.findById(id).get();

        boutiquier.setSupprimer(true);
        boutiquier.setEtat(Etat.DESACTIVER);
        return "Vous avez supprimer la Boutique "+boutiquier.getNom()+" "+boutiquier.getPrenom();

    }

    @Override
    public String modifier_boutiquier(Boutiquier boutiquier, Long id) {
        Boutiquier boutiquierExistant = this.boutiquierRepository.findById(id).get();

        boutiquierExistant.setNom(boutiquier.getNom());
        boutiquierExistant.setPrenom(boutiquier.getPrenom());
        boutiquierExistant.setLogin(boutiquier.getLogin());
        boutiquierExistant.setPassword(boutiquier.getPassword());
        boutiquierExistant.setTelephone(boutiquier.getTelephone());

        return "Boutique modifiée avec succes";
    }

    @Transactional
    @Override
    public Boutiquier modifyPassword(Long id, String pass1, String pass2) {
        Boutiquier boutiquier = boutiquierRepository.findById(id).get();
        if (pass1.equals(boutiquier.getPassword())){
            boutiquier.setPassword(pass2);
            System.out.println(pass2);
            return boutiquierRepository.save(boutiquier);
            //return"Modifcation effectuer avec succes";
        }else{
            return boutiquier;
        }

    }

    @Override
    public Boutiquier findByLoginAndPassword(String login, String password) {
        Optional<Boutiquier> optionalBoutiquier= boutiquierRepository.findByLoginAndPassword(login,password);
        if(optionalBoutiquier.isEmpty()){
            return optionalBoutiquier.orElse(null);
        }
        if (optionalBoutiquier.get().getEtat()== Etat.DESACTIVER){
            throw new IllegalStateException("Le compte est desactivé");
        }
        return optionalBoutiquier.get();
    }
    }


