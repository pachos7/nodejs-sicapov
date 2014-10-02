-- phpMyAdmin SQL Dump
-- version 4.2.9.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 02, 2014 at 04:55 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.9-1ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sicapov`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `email`, `phone`) VALUES
(1, 'PEdro', 'adsasdas q', 'asdsdfsd', 3534534),
(2, 'pablos', 'asdfas dfas asdf a', 'dfgsdfg sd Pablo', 345345),
(1, 'PEdro', 'adsasdas q', 'asdsdfsd', 3534534),
(2, 'pablos', 'asdfas dfas asdf a', 'dfgsdfg sd Pablo', 345345),
(0, 'Jake w', 'fsldkfjsdljfk', 'flskdjflsdjf', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hv_delitossexuales`
--

CREATE TABLE `hv_delitossexuales` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_desaparicionforzada`
--

CREATE TABLE `hv_desaparicionforzada` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hv_desaparicionforzada`
--

INSERT INTO `hv_desaparicionforzada` (`Tipodocumento`, `Numerodocumento`, `Ano`, `Declarado`, `Lugardeclarado`, `Estadodeclaracion`) VALUES
('Cedula de Ciudadania', 1001, 2003, 'No', 'UAV', 'Excluido'),
('Cedula de Ciudadania', 1002, 2001, 'No', 'Procuraduría', 'incluido'),
('Cedula de Ciudadania', 1016, 2012, 'Si', 'Procuraduría', 'incluido');

-- --------------------------------------------------------

--
-- Table structure for table `hv_desplazamiento`
--

CREATE TABLE `hv_desplazamiento` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_despojodetierras`
--

CREATE TABLE `hv_despojodetierras` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_homicidio`
--

CREATE TABLE `hv_homicidio` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hv_homicidio`
--

INSERT INTO `hv_homicidio` (`Tipodocumento`, `Numerodocumento`, `Ano`, `Declarado`, `Lugardeclarado`, `Estadodeclaracion`) VALUES
('Cedula de Ciudadania', 222, 1987, 'Si', 'Defensoría', 'incluido'),
('Cedula de Ciudadania', 1001, 1998, 'Si', 'Procuraduría', 'incluido'),
('Cedula de Ciudadania', 1002, 1996, 'Si', 'Personería', 'incluido'),
('Cedula de Ciudadania', 1003, 1996, 'Si', 'Personería', 'incluido'),
('Cedula de Ciudadania', 7591186, 2014, 'Si', 'Personería', 'incluido'),
('Cedula de Ciudadania', 7602807, 1997, 'SI', 'Manaure', ''),
('Cedula de Ciudadania', 1221963233, 1998, 'SI', 'PIVIJAY', '');

-- --------------------------------------------------------

--
-- Table structure for table `hv_lesionespersonales`
--

CREATE TABLE `hv_lesionespersonales` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hv_lesionespersonales`
--

INSERT INTO `hv_lesionespersonales` (`Tipodocumento`, `Numerodocumento`, `Ano`, `Declarado`, `Lugardeclarado`, `Estadodeclaracion`) VALUES
('Cedula de Ciudadania', 7591186, 2014, 'Si', 'Personería', 'incluido');

-- --------------------------------------------------------

--
-- Table structure for table `hv_masacre`
--

CREATE TABLE `hv_masacre` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_minasantipersonales`
--

CREATE TABLE `hv_minasantipersonales` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_perdidadebienes`
--

CREATE TABLE `hv_perdidadebienes` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_reclutamientoilegal`
--

CREATE TABLE `hv_reclutamientoilegal` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_secuestro`
--

CREATE TABLE `hv_secuestro` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hv_tortura`
--

CREATE TABLE `hv_tortura` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Ano` int(5) NOT NULL,
  `Declarado` varchar(2) NOT NULL,
  `Lugardeclarado` varchar(30) NOT NULL,
  `Estadodeclaracion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `victimas`
--

CREATE TABLE `victimas` (
  `Tipodocumento` varchar(30) NOT NULL,
  `Numerodocumento` int(11) NOT NULL,
  `Nombres` varchar(50) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Sexo` text NOT NULL,
  `Orientacionsexual` varchar(30) DEFAULT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `Libretamilitar` varchar(20) DEFAULT NULL,
  `Jefehogar` varchar(2) DEFAULT NULL,
  `Vinculo` varchar(50) DEFAULT NULL,
  `Barrio` varchar(50) DEFAULT NULL,
  `SISBEN` varchar(2) NOT NULL,
  `Afiliado` varchar(2) DEFAULT NULL,
  `Regimen` varchar(30) DEFAULT NULL,
  `Discapacidad` varchar(30) DEFAULT NULL,
  `Origendis` varchar(50) DEFAULT NULL,
  `Estudio` varchar(50) DEFAULT NULL,
  `NivelEstudio` varchar(50) DEFAULT NULL,
  `Leer` varchar(2) DEFAULT NULL,
  `Escribir` varchar(2) DEFAULT NULL,
  `Capacitacion` varchar(2) DEFAULT NULL,
  `Area` varchar(50) DEFAULT NULL,
  `Entidadc` varchar(30) DEFAULT NULL,
  `Trabajo` varchar(2) DEFAULT NULL,
  `Areatrabajo` varchar(30) DEFAULT NULL,
  `Tipotrabajo` varchar(50) DEFAULT NULL,
  `Grupoetnico` varchar(30) NOT NULL,
  `TipoDesplazamiento` varchar(30) DEFAULT NULL,
  `Retorno` varchar(30) DEFAULT NULL,
  `DeseaRetornar` varchar(2) DEFAULT NULL,
  `TipoRetorno` varchar(30) DEFAULT NULL,
  `QuienRetorno` varchar(30) DEFAULT NULL,
  `RetornoAcompanado` varchar(2) DEFAULT NULL,
  `PlanRetorno` varchar(2) DEFAULT NULL,
  `Reubicarse` varchar(2) DEFAULT NULL,
  `Razon` varchar(50) DEFAULT NULL,
  `Separacion` varchar(2) DEFAULT NULL,
  `Unificacion` varchar(2) DEFAULT NULL,
  `AyudaEstatal` varchar(2) DEFAULT NULL,
  `RecibioAyuda` varchar(2) DEFAULT NULL,
  `Refugio` varchar(2) DEFAULT NULL,
  `Pais` varchar(30) DEFAULT NULL,
  `AnoRefugio` varchar(5) DEFAULT NULL,
  `RecibioAyudaRefugio` varchar(2) DEFAULT NULL,
  `Organizacion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `victimas`
--

INSERT INTO `victimas` (`Tipodocumento`, `Numerodocumento`, `Nombres`, `Apellidos`, `Sexo`, `Orientacionsexual`, `Direccion`, `Telefono`, `Libretamilitar`, `Jefehogar`, `Vinculo`, `Barrio`, `SISBEN`, `Afiliado`, `Regimen`, `Discapacidad`, `Origendis`, `Estudio`, `NivelEstudio`, `Leer`, `Escribir`, `Capacitacion`, `Area`, `Entidadc`, `Trabajo`, `Areatrabajo`, `Tipotrabajo`, `Grupoetnico`, `TipoDesplazamiento`, `Retorno`, `DeseaRetornar`, `TipoRetorno`, `QuienRetorno`, `RetornoAcompanado`, `PlanRetorno`, `Reubicarse`, `Razon`, `Separacion`, `Unificacion`, `AyudaEstatal`, `RecibioAyuda`, `Refugio`, `Pais`, `AnoRefugio`, `RecibioAyudaRefugio`, `Organizacion`) VALUES
('Cedula de Ciudadania', 111, 'Pedro', 'Paramo', 'Masculino', 'Heterosexual', 'Calle 111 #11-11', 1233432, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 222, 'Sandra', 'Pertuz', 'Femenino', 'Heterosexual', 'Avenida del Rio #5000', 23423423, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 333, 'Jairo', 'Lanus Llanos', 'Masculino', 'Heterosexual', 'Segunda con calle terecera', 234234324, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 444, 'Alfredo', 'Nuñez Marquez', 'Masculino', 'Heterosexual', 'Avenida del Rio #3000', 123456, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 555, 'Rigoberto Jairo', 'Garzon Coronado', 'Masculino', 'Heterosexual', 'Calle 34 #11-11', 123456, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 666, 'Fernando', 'Alabarte', 'Masculino', 'Heterosexual', 'sdfsd', 4534534, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 777, 'Fabian jose', 'Pertides', 'Masculino', 'Heterosexual', '105 CLARK ST APT D', 2323, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 888, 'Fabian joseserino', 'Pertides', 'Masculino', 'Heterosexual', '105 CLARK ST APT D', 2323, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 999, 'Gabriel joseserino', 'Pertides', 'Masculino', 'Heterosexual', '105 CLARK ST APT D', 2323, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1000, 'Miranda', 'Pertides', 'Masculino', 'Heterosexual', '105 CLARK ST APT D', 2323, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1001, 'Amalia', 'Marguez', 'Masculino', 'Heterosexual', 'Calle 34 #11-11', 123456, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1002, 'Adan Primero', 'De Dios', 'Masculino', 'Heterosexual', 'Calle 34 #11-11', 12312312, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1003, 'Adan Primero', 'De Dios', 'Masculino', 'Heterosexual', 'Calle 34 #11-11', 12312312, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1016, 'mmm', 'nnnn', 'Masculino', 'Heterosexual', 'hceiucbeiuc', 3987, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1515, 'f', 'f', 'Masculino', '', '', NULL, '', '', '', '', 'No', NULL, '', '', NULL, '', NULL, '', '', '', '', NULL, NULL, NULL, NULL, 'Indígena', 'TipoDesplazamiento', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 124456, 'Rosana', 'Vasconni', '', '', 'Calle 14 #34-17', 2147483647, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1287653, 'carlos javier', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1765703, 'JORGE ELIECER', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 5006955, 'EVELIO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 5124059, 'ALFONSO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 5794948, 'ALIRIO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 7602807, 'Francisco Javier', 'Niño Yepes', '', '', 'Calle 29 A #24-14 las vegas', 4200190, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 9268861, 'LUIS ALBERTO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12449423, 'omar enrrique', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12535482, 'euclides', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12613737, 'EDGAR ANTONIO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12615877, 'JUAN DE LA CRUZ', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12618562, 'HERIBERTO JOSE', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12620383, 'rusbel jose', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12623418, 'jose del carmen', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12627202, 'benjamin alfonso', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12628801, 'JUAN  CARLOS', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12631156, 'alexander ismael', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12632601, 'JUAN CARLOS', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12635608, 'TAIRO ALFONZO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12636085, 'JESUS FELIPE', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 12710667, 'ricardo antinio', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 19614999, 'roque manuel', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 19615425, 'MANUEL SALVADOR', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 19617425, 'EDINAEL', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 19617657, 'ricardo enrique', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 22504472, 'ELIBETH ELENA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26688352, 'IRENE ISABEL', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26707603, 'HERMINIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26708697, 'SUSANA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26709145, 'nulfa carina', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26717152, 'AMARILIS MARIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26718827, 'LUZ MARINA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26719359, 'MARLENE', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26719395, 'CONSUELO YANET', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26761398, 'YANETH', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 26845783, 'marta cecilia', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 32883652, 'blanca mireya', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 36537358, 'EMILIA ESTHER', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 36554622, 'MARIA DEL CARMEN', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 36565745, 'FANNY ESTHER', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 36721402, 'CARMEN CECILIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39000114, 'ZOILA ROSA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39001447, 'ELEXI MARIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39002392, 'SUNILDA GRACIELA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39002507, 'maria antonia', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39004749, 'LUZ MARI', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39025517, 'ursura maria', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39026098, 'ANGELA MERCEDES', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39026582, 'CECILIA FLOR', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39027571, 'JUANA ELENA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39028706, 'fanny esther', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39028869, 'raquel damaris', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39029027, 'yesenia esther', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39030666, 'PETRONA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39032252, 'OMAYRA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39033386, 'ROSARIO DEL TRANSITO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39140112, 'maria eneima', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39140887, 'MARIA TRINIDADA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39141694, 'GISELLA MARGARITA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39142128, 'sandra milena', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39142610, 'ADRIANA CRISTINA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39143038, 'YERANIA MARIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 39144909, 'indira karina', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 49690671, 'MARIA DEL ROSARIO', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 50987991, 'marelvis', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 52132954, 'MARIA JANET', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57411458, 'MAGDALENA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57411727, 'LEDIS', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57412733, 'LEONILDA ISABEL', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57413620, 'ERLINDA ISABEL', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57413846, 'EDILMA ROSA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57413917, 'SARA ESTHER', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57414498, 'flor elena', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57414735, 'LUZ ESTELA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57415314, 'MATEA ISABEL', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57415927, 'SARAY MARIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57417232, 'maria de carmen', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57418625, 'CELEDONIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57419394, 'veronica beatriz', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 57420465, 'edilsa beatriz', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 67985123, 'pedro pablo', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 72097231, 'ENRIQUE RAFAEL', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 73552326, 'jorge luis', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 77150803, 'jeremias', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 77153995, 'JORGE ABDON', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 78704294, 'OMAR ENRIQUE', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 85490435, 'benjamin de jesus', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 108013797, 'maria del carmen', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 390009972, 'ledis ester', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1080422513, 'audalis laudith', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1082894901, 'Manuel Fabial', 'Nino Yepes', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083452961, 'JONAIDY', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083456281, 'yaniris judith', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083456579, 'SILVIA ROSA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083458635, 'maria mercedes', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083460331, 'jose raul', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083463467, 'JULIANIS KARINA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083463597, 'HEINI SOFIA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1083463637, 'eva margarita', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1098634286, 'NINI JOHANA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1124381336, 'NEHEMIAS ELI', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1128194284, 'merlis antoni', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Cedula de Ciudadania', 1221963233, 'ANGIE PAOLA', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Registro Civil', 123456, 'Pedro', 'Ramos', '', '', 'Calle 54 #34-66', 22222222, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Registro Civil', 333333333, 'Petra Julia', 'Martinez Campo', 'Femenino', 'Heterosexual', 'Calle 34 #11-11', 123456, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('Registro Civil', 444444444, 'Donaciano', 'Pertuz', 'Masculino', 'Heterosexual', 'Carrera 29 #24-12', 123456, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hv_delitossexuales`
--
ALTER TABLE `hv_delitossexuales`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_desaparicionforzada`
--
ALTER TABLE `hv_desaparicionforzada`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_desplazamiento`
--
ALTER TABLE `hv_desplazamiento`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_despojodetierras`
--
ALTER TABLE `hv_despojodetierras`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_homicidio`
--
ALTER TABLE `hv_homicidio`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_lesionespersonales`
--
ALTER TABLE `hv_lesionespersonales`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_masacre`
--
ALTER TABLE `hv_masacre`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_minasantipersonales`
--
ALTER TABLE `hv_minasantipersonales`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_perdidadebienes`
--
ALTER TABLE `hv_perdidadebienes`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_reclutamientoilegal`
--
ALTER TABLE `hv_reclutamientoilegal`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_secuestro`
--
ALTER TABLE `hv_secuestro`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `hv_tortura`
--
ALTER TABLE `hv_tortura`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);

--
-- Indexes for table `victimas`
--
ALTER TABLE `victimas`
 ADD PRIMARY KEY (`Tipodocumento`,`Numerodocumento`);
