-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 01 mars 2022 à 10:03
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `api_denree`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

CREATE TABLE `administrateur` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `supprimer` bit(1) DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `administrateur`
--

INSERT INTO `administrateur` (`id`, `email`, `etat`, `login`, `nom`, `password`, `prenom`, `supprimer`, `telephone`) VALUES
(1, 'fadj@gmail.com', 'ACTIVER', 'fad', 'Sidibe', 'fad123', 'Fadiala', b'0', 72120680),
(2, 'sago@gmail.com', 'ACTIVER', 'sss', 'Sidibe', 'sas123', 'Moussa ', b'0', 66778899),
(4, 'dje@gmail.com', 'ACTIVER', 'dje', 'Traore', 'dje123', 'Djeneba', b'0', 76812600),
(3, 'bah@gmail.com', 'DESACTIVER', 'bah', 'Bah', 'bah123', 'Mohamed', b'1', 98866446),
(5, 'fouss@gmail.com', 'ACTIVER', 'fouss', 'Dembele', 'fouss123', 'Fousseyni', b'0', 66754210),
(6, 'keidi@gmail.com', 'ACTIVER', 'keid', 'Keita', 'keid123', 'Sidi', b'0', 6788996);

-- --------------------------------------------------------

--
-- Structure de la table `boutiques`
--

CREATE TABLE `boutiques` (
  `id` bigint(20) NOT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `boutiquier_id` bigint(20) DEFAULT NULL,
  `quartier_id` bigint(20) DEFAULT NULL,
  `ville_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boutiques`
--

INSERT INTO `boutiques` (`id`, `latitude`, `longitude`, `nom`, `photo`, `boutiquier_id`, `quartier_id`, `ville_id`) VALUES
(1, '1111°', '2211°', 'Simpara', 'pngwing.com (2).png', 1, 1, 1),
(2, '1133', '2331', 'Soditel', 'pngwing.com (1).png', 1, 2, 1),
(3, '11133', '7766', 'Boi et Frere', '9c0614f8-596144ce.jpg', 2, 2, 2),
(4, '1432', '76441', 'MiraMarket', 'azalai-grand-hotel.jpg', 2, 3, 2),
(5, '12345', '2344', 'Yara', '0cc07a505b9dfc1c5aba3a79f93511d2.png', 3, 3, 3),
(6, '11223', '33221', 'Mohamed VI', '220h0g000000800kcB7F3_R_800_525.jpg', 3, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `boutiques_administrateurs`
--

CREATE TABLE `boutiques_administrateurs` (
  `boutiques_id` bigint(20) NOT NULL,
  `administrateurs_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `boutiquier`
--

CREATE TABLE `boutiquier` (
  `id` bigint(20) NOT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` int(11) NOT NULL,
  `supprimer` bit(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boutiquier`
--

INSERT INTO `boutiquier` (`id`, `etat`, `login`, `nom`, `password`, `prenom`, `telephone`, `supprimer`) VALUES
(1, 'ACTIVER', 'FFF', 'Traore', 'dej123', 'Djeneba', 76760808, NULL),
(2, 'ACTIVER', 'AAA', 'SACKO', 'AAA123', 'Ousmane', 66558209, NULL),
(3, 'ACTIVER', 'ffe', 'Kouyate', 'ffe123', 'Issa', 5000545, NULL),
(4, 'DESACTIVER', NULL, 'ftyqsu', 'HISUHNUFIJ', 'mouss', 124468678, b'0'),
(5, 'DESACTIVER', NULL, 'ftyqsu', 'HISUHNUFIJ', 'oum', 124468678, b'0'),
(6, 'DESACTIVER', NULL, 'ftyqsu', 'HISUHNUFIJ', 'djeneba', 124468678, b'0'),
(11, 'DESACTIVER', 'test1', 'moi', 'test123', 'Test', 8765954, b'0'),
(12, 'ACTIVER', 'test12', 'Test', 'test123', 'test1', 77668855, b'0');

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `supprimer` bit(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `nom`, `photo`, `etat`, `supprimer`) VALUES
(1, 'Riz', 'pngegg.png', NULL, NULL),
(2, 'Mil', 'pngegg (1).png', NULL, NULL),
(3, 'Maïs', 'hotel-massaley.jpg', NULL, NULL),
(4, 'Haricot', 'encours.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` bigint(20) NOT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `etat`, `login`, `nom`, `password`, `prenom`, `telephone`) VALUES
(1, 'ACTIVER', 'clien1', 'Diarra', 'cl123', 'Oumou', 55667888),
(2, 'ACTIVER', 'clien2\r\n', 'Sangare', 'cli1234', 'Modibo', 1233355);

-- --------------------------------------------------------

--
-- Structure de la table `localite`
--

CREATE TABLE `localite` (
  `id` bigint(20) NOT NULL,
  `etat` bit(1) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `localite`
--

INSERT INTO `localite` (`id`, `etat`, `libelle`, `type`, `parent_id`) VALUES
(1, b'1', 'Bamako', 'Ville', NULL),
(2, b'1', 'Sikasso', 'Ville', NULL),
(3, b'1', 'Segou', 'Ville', NULL),
(4, b'1', 'Kayes', 'Ville', NULL),
(5, b'1', 'Koulikoro', 'Ville', NULL),
(6, b'1', 'Commune I', 'Quartier', 1),
(7, b'1', 'Kalaban Coura', 'Quartier', 1),
(8, b'1', 'Sebougou', 'Quartier', 3),
(9, b'1', 'Pelengana', 'Quartier', 3),
(10, b'1', 'Medine', 'Quartier', 2),
(11, b'1', 'Darsalam', 'Quartier', 2),
(12, b'1', 'Hamdalaye', 'Quartier', 1),
(13, b'1', 'Niamana', 'Quartier', 1),
(14, b'1', 'Kenieba', 'Quartier', 4),
(15, b'1', 'Kayndi', 'Quartier', 4),
(16, b'1', 'Bamananki', 'Quartier', 3),
(17, b'1', 'Sokolakono', 'Quartier', 3);

-- --------------------------------------------------------

--
-- Structure de la table `localite_boutiques`
--

CREATE TABLE `localite_boutiques` (
  `localite_id` bigint(20) NOT NULL,
  `boutiques_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id` bigint(20) NOT NULL,
  `date_creation` date DEFAULT NULL,
  `heure_creation` time DEFAULT NULL,
  `prix_unitaire` double DEFAULT NULL,
  `quantite` int(11) NOT NULL,
  `statut` int(11) DEFAULT NULL,
  `client_id` bigint(20) DEFAULT NULL,
  `produits_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `panier`
--

INSERT INTO `panier` (`id`, `date_creation`, `heure_creation`, `prix_unitaire`, `quantite`, `statut`, `client_id`, `produits_id`) VALUES
(1, '2022-02-18', '15:50:18', 22344, 3, 0, 1, 32),
(2, '2022-02-22', '17:05:35', 350, 4, 0, 2, 32);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `photos` varchar(255) DEFAULT NULL,
  `prix_achat` double DEFAULT NULL,
  `prix_unitaire` double DEFAULT NULL,
  `quantite` int(11) NOT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `boutiques_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `photos`, `prix_achat`, `prix_unitaire`, `quantite`, `category_id`, `boutiques_id`) VALUES
(32, 'f', '227978.png', NULL, 123, 250, 2, 2),
(38, 'Riz Parfumé', 'lkkk.png', NULL, 200, 443, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `produit_boutique`
--

CREATE TABLE `produit_boutique` (
  `id` bigint(20) NOT NULL,
  `boutiques_id` bigint(20) DEFAULT NULL,
  `produits_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `produit_boutique`
--

INSERT INTO `produit_boutique` (`id`, `boutiques_id`, `produits_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 3, 2),
(6, 3, 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `boutiques`
--
ALTER TABLE `boutiques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6ekh2ig6atqt4grk4a9ba3c1k` (`boutiquier_id`),
  ADD KEY `FKr7x4c8tbllbmhv90ydmcac0q0` (`quartier_id`),
  ADD KEY `FKni3gmcr4icd5d3t5vpvg0aldy` (`ville_id`);

--
-- Index pour la table `boutiques_administrateurs`
--
ALTER TABLE `boutiques_administrateurs`
  ADD KEY `FKth0v05vdhl69q4m53py76m3bu` (`administrateurs_id`),
  ADD KEY `FK5oyumvq1ohv3m2jvvi7jvtw7v` (`boutiques_id`);

--
-- Index pour la table `boutiquier`
--
ALTER TABLE `boutiquier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `localite`
--
ALTER TABLE `localite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKto409p3u6f8a2dmnblgl1y7xm` (`parent_id`);

--
-- Index pour la table `localite_boutiques`
--
ALTER TABLE `localite_boutiques`
  ADD UNIQUE KEY `UK_a1kiwnrbiuqmpke0l71g7bbtx` (`boutiques_id`),
  ADD KEY `FKrben6np8j8xemret8goaxqx6b` (`localite_id`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjor7gwisog2wxwsgebfyuxqrv` (`client_id`),
  ADD KEY `FK20dhslw6o4bq8w3pj2siwipew` (`produits_id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdvdogr98xetl5qwotp1g1ehqu` (`boutiques_id`),
  ADD KEY `FKibggsgmewod8oa6ux26k36bgh` (`category_id`);

--
-- Index pour la table `produit_boutique`
--
ALTER TABLE `produit_boutique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKk95i1bijlotpl8ng1j3rh3pk1` (`boutiques_id`),
  ADD KEY `FK2jyp0piocwune401wvwdovofl` (`produits_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `administrateur`
--
ALTER TABLE `administrateur`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `boutiques`
--
ALTER TABLE `boutiques`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `boutiquier`
--
ALTER TABLE `boutiquier`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `localite`
--
ALTER TABLE `localite`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT pour la table `produit_boutique`
--
ALTER TABLE `produit_boutique`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
