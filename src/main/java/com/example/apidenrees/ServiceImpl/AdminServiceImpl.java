package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import com.example.apidenrees.Reositories.AdminRepository;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepository adminRepository;


    @Override
    public String ajout_administrateurs(Administrateur administrateur) {
        Optional<Administrateur> AdminEmail = adminRepository.findByEmail(administrateur.getEmail());
        Optional<Administrateur>AdminTelephone = adminRepository.findByTelephone(administrateur.getTelephone());
        Optional<Administrateur>AdminLogin = adminRepository.findByLogin(administrateur.getLogin());

        if (AdminEmail.isPresent()){
            System.out.println("email");
            return "email";
        }else
            if (AdminTelephone.isPresent()){
            System.out.println("telephone");
            return "telephone";
        }
       else if (AdminLogin.isPresent()){
            System.out.println("login");
            return "login";

        }

       else{

        return "rien";
       }
    }
    @Override
    public Administrateur addAdmin(Administrateur administrateur)
    {
     return adminRepository.save(administrateur);
    }

    @Override
    public List<Administrateur> listAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public Administrateur getAdminById(Long id) {
        return adminRepository.findById(id).get();
    }

    @Override
    public String supprimer_admin(Long id) {
     Administrateur administrateur = adminRepository.findById(id).get();

     administrateur.setSupprimer(true);
     administrateur.setEtat(Etat.DESACTIVER);
    return "Vous avez supprimer l'admin "+administrateur.getPrenom()+" "+administrateur.getNom();

    }

    @Override
    public String modifier_admin(Administrateur administrateur, Long id) {
        Administrateur adminExistant = this.adminRepository.findById(id).get();

        adminExistant.setNom(administrateur.getNom());
        adminExistant.setPrenom(administrateur.getPrenom());
        adminExistant.setEmail(administrateur.getEmail());
        adminExistant.setLogin(administrateur.getLogin());
        adminExistant.setPassword(administrateur.getPassword());
        adminExistant.setTelephone(administrateur.getTelephone());
        return "Admin modifié avec succes";

    }

    @Override
    public Administrateur findByLoginAndPassword(String login, String password) {
        Optional<Administrateur> optionalAdministrateur = adminRepository.findByLoginAndPassword(login,password);
        if(optionalAdministrateur.isEmpty()){
            return optionalAdministrateur.orElse(null);
        }
        if (optionalAdministrateur.get().getEtat()==Etat.DESACTIVER){
            throw new IllegalStateException("Le compte est desactivé");
        }
        return optionalAdministrateur.get();
    }

    @Override
    public String restoreAdmin(Long id, Long idAdmin) {
        Administrateur administrateur = adminRepository.findById(id).get();

        administrateur.setSupprimer(false);
        administrateur.setEtat(Etat.ACTIVER);
        return "Vous avez restauré l'admin " + administrateur.getPrenom() + " " + administrateur.getNom();
    }


}

