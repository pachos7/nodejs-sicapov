-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2014 a las 04:07:11
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sicapov`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `email`, `phone`) VALUES
(1, 'PEdro', 'adsasdas q', 'asdsdfsd', 35345345),
(2, 'pablos', 'asdfas dfas asdf a', 'dfgsdfg sd Pablo', 345345),
(1, 'PEdro', 'adsasdas q', 'asdsdfsd', 35345345),
(2, 'pablos', 'asdfas dfas asdf a', 'dfgsdfg sd Pablo', 345345),
(0, 'Jake', 'fsldkfjsdljfk', 'flskdjflsdjf', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hv_homicidio`
--

CREATE TABLE IF NOT EXISTS `hv_homicidio` (
  `tipodocumento` varchar(30) NOT NULL,
  `numerodocumento` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `declarado` varchar(2) NOT NULL,
  `lugardeclarado` varchar(30) NOT NULL,
  `estadodeclaracion` varchar(30) NOT NULL,
  `denunciado` varchar(2) NOT NULL,
  PRIMARY KEY (`tipodocumento`,`numerodocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hv_homicidio`
--

INSERT INTO `hv_homicidio` (`tipodocumento`, `numerodocumento`, `ano`, `declarado`, `lugardeclarado`, `estadodeclaracion`, `denunciado`) VALUES
('Cedula de Ciudadania', 7602807, 1997, 'SI', 'Manaure', '', ''),
('Cedula de Ciudadania', 1221963233, 1998, 'SI', 'PIVIJAY', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `victimas`
--

CREATE TABLE IF NOT EXISTS `victimas` (
  `tipodocumento` varchar(30) NOT NULL,
  `numerodocumento` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  PRIMARY KEY (`tipodocumento`,`numerodocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `victimas`
--

INSERT INTO `victimas` (`tipodocumento`, `numerodocumento`, `nombre`, `apellido`, `direccion`, `telefono`) VALUES
('Cedula de Ciudadania', 124456, 'Rosana', 'Vasconni', 'Calle 14 #34-17', 2147483647),
('Cedula de Ciudadania', 1287653, 'carlos javier', '', '', 0),
('Cedula de Ciudadania', 1765703, 'JORGE ELIECER', '', '', 0),
('Cedula de Ciudadania', 5006955, 'EVELIO', '', '', 0),
('Cedula de Ciudadania', 5124059, 'ALFONSO', '', '', 0),
('Cedula de Ciudadania', 5794948, 'ALIRIO', '', '', 0),
('Cedula de Ciudadania', 7602807, 'Francisco Javier', 'Niño Yepes', 'Calle 29 A #24-14 las vegas', 4200190),
('Cedula de Ciudadania', 9268861, 'LUIS ALBERTO', '', '', 0),
('Cedula de Ciudadania', 12449423, 'omar enrrique', '', '', 0),
('Cedula de Ciudadania', 12535482, 'euclides', '', '', 0),
('Cedula de Ciudadania', 12613737, 'EDGAR ANTONIO', '', '', 0),
('Cedula de Ciudadania', 12615877, 'JUAN DE LA CRUZ', '', '', 0),
('Cedula de Ciudadania', 12618562, 'HERIBERTO JOSE', '', '', 0),
('Cedula de Ciudadania', 12620383, 'rusbel jose', '', '', 0),
('Cedula de Ciudadania', 12623418, 'jose del carmen', '', '', 0),
('Cedula de Ciudadania', 12627202, 'benjamin alfonso', '', '', 0),
('Cedula de Ciudadania', 12628801, 'JUAN  CARLOS', '', '', 0),
('Cedula de Ciudadania', 12631156, 'alexander ismael', '', '', 0),
('Cedula de Ciudadania', 12632601, 'JUAN CARLOS', '', '', 0),
('Cedula de Ciudadania', 12635608, 'TAIRO ALFONZO', '', '', 0),
('Cedula de Ciudadania', 12636085, 'JESUS FELIPE', '', '', 0),
('Cedula de Ciudadania', 12710667, 'ricardo antinio', '', '', 0),
('Cedula de Ciudadania', 19614999, 'roque manuel', '', '', 0),
('Cedula de Ciudadania', 19615425, 'MANUEL SALVADOR', '', '', 0),
('Cedula de Ciudadania', 19617425, 'EDINAEL', '', '', 0),
('Cedula de Ciudadania', 19617657, 'ricardo enrique', '', '', 0),
('Cedula de Ciudadania', 22504472, 'ELIBETH ELENA', '', '', 0),
('Cedula de Ciudadania', 26688352, 'IRENE ISABEL', '', '', 0),
('Cedula de Ciudadania', 26707603, 'HERMINIA', '', '', 0),
('Cedula de Ciudadania', 26708697, 'SUSANA', '', '', 0),
('Cedula de Ciudadania', 26709145, 'nulfa carina', '', '', 0),
('Cedula de Ciudadania', 26717152, 'AMARILIS MARIA', '', '', 0),
('Cedula de Ciudadania', 26718827, 'LUZ MARINA', '', '', 0),
('Cedula de Ciudadania', 26719359, 'MARLENE', '', '', 0),
('Cedula de Ciudadania', 26719395, 'CONSUELO YANET', '', '', 0),
('Cedula de Ciudadania', 26761398, 'YANETH', '', '', 0),
('Cedula de Ciudadania', 26845783, 'marta cecilia', '', '', 0),
('Cedula de Ciudadania', 32883652, 'blanca mireya', '', '', 0),
('Cedula de Ciudadania', 36537358, 'EMILIA ESTHER', '', '', 0),
('Cedula de Ciudadania', 36554622, 'MARIA DEL CARMEN', '', '', 0),
('Cedula de Ciudadania', 36565745, 'FANNY ESTHER', '', '', 0),
('Cedula de Ciudadania', 36721402, 'CARMEN CECILIA', '', '', 0),
('Cedula de Ciudadania', 39000114, 'ZOILA ROSA', '', '', 0),
('Cedula de Ciudadania', 39001447, 'ELEXI MARIA', '', '', 0),
('Cedula de Ciudadania', 39002392, 'SUNILDA GRACIELA', '', '', 0),
('Cedula de Ciudadania', 39002507, 'maria antonia', '', '', 0),
('Cedula de Ciudadania', 39004749, 'LUZ MARI', '', '', 0),
('Cedula de Ciudadania', 39025517, 'ursura maria', '', '', 0),
('Cedula de Ciudadania', 39026098, 'ANGELA MERCEDES', '', '', 0),
('Cedula de Ciudadania', 39026582, 'CECILIA FLOR', '', '', 0),
('Cedula de Ciudadania', 39027571, 'JUANA ELENA', '', '', 0),
('Cedula de Ciudadania', 39028706, 'fanny esther', '', '', 0),
('Cedula de Ciudadania', 39028869, 'raquel damaris', '', '', 0),
('Cedula de Ciudadania', 39029027, 'yesenia esther', '', '', 0),
('Cedula de Ciudadania', 39030666, 'PETRONA', '', '', 0),
('Cedula de Ciudadania', 39032252, 'OMAYRA', '', '', 0),
('Cedula de Ciudadania', 39033386, 'ROSARIO DEL TRANSITO', '', '', 0),
('Cedula de Ciudadania', 39140112, 'maria eneima', '', '', 0),
('Cedula de Ciudadania', 39140887, 'MARIA TRINIDADA', '', '', 0),
('Cedula de Ciudadania', 39141694, 'GISELLA MARGARITA', '', '', 0),
('Cedula de Ciudadania', 39142128, 'sandra milena', '', '', 0),
('Cedula de Ciudadania', 39142610, 'ADRIANA CRISTINA', '', '', 0),
('Cedula de Ciudadania', 39143038, 'YERANIA MARIA', '', '', 0),
('Cedula de Ciudadania', 39144909, 'indira karina', '', '', 0),
('Cedula de Ciudadania', 49690671, 'MARIA DEL ROSARIO', '', '', 0),
('Cedula de Ciudadania', 50987991, 'marelvis', '', '', 0),
('Cedula de Ciudadania', 52132954, 'MARIA JANET', '', '', 0),
('Cedula de Ciudadania', 57411458, 'MAGDALENA', '', '', 0),
('Cedula de Ciudadania', 57411727, 'LEDIS', '', '', 0),
('Cedula de Ciudadania', 57412733, 'LEONILDA ISABEL', '', '', 0),
('Cedula de Ciudadania', 57413620, 'ERLINDA ISABEL', '', '', 0),
('Cedula de Ciudadania', 57413846, 'EDILMA ROSA', '', '', 0),
('Cedula de Ciudadania', 57413917, 'SARA ESTHER', '', '', 0),
('Cedula de Ciudadania', 57414498, 'flor elena', '', '', 0),
('Cedula de Ciudadania', 57414735, 'LUZ ESTELA', '', '', 0),
('Cedula de Ciudadania', 57415314, 'MATEA ISABEL', '', '', 0),
('Cedula de Ciudadania', 57415927, 'SARAY MARIA', '', '', 0),
('Cedula de Ciudadania', 57417232, 'maria de carmen', '', '', 0),
('Cedula de Ciudadania', 57418625, 'CELEDONIA', '', '', 0),
('Cedula de Ciudadania', 57419394, 'veronica beatriz', '', '', 0),
('Cedula de Ciudadania', 57420465, 'edilsa beatriz', '', '', 0),
('Cedula de Ciudadania', 67985123, 'pedro pablo', '', '', 0),
('Cedula de Ciudadania', 72097231, 'ENRIQUE RAFAEL', '', '', 0),
('Cedula de Ciudadania', 73552326, 'jorge luis', '', '', 0),
('Cedula de Ciudadania', 77150803, 'jeremias', '', '', 0),
('Cedula de Ciudadania', 77153995, 'JORGE ABDON', '', '', 0),
('Cedula de Ciudadania', 78704294, 'OMAR ENRIQUE', '', '', 0),
('Cedula de Ciudadania', 85490435, 'benjamin de jesus', '', '', 0),
('Cedula de Ciudadania', 108013797, 'maria del carmen', '', '', 0),
('Cedula de Ciudadania', 390009972, 'ledis ester', '', '', 0),
('Cedula de Ciudadania', 1080422513, 'audalis laudith', '', '', 0),
('Cedula de Ciudadania', 1082894901, 'Manuel Fabial', 'Nino Yepes', '', 0),
('Cedula de Ciudadania', 1083452961, 'JONAIDY', '', '', 0),
('Cedula de Ciudadania', 1083456281, 'yaniris judith', '', '', 0),
('Cedula de Ciudadania', 1083456579, 'SILVIA ROSA', '', '', 0),
('Cedula de Ciudadania', 1083458635, 'maria mercedes', '', '', 0),
('Cedula de Ciudadania', 1083460331, 'jose raul', '', '', 0),
('Cedula de Ciudadania', 1083463467, 'JULIANIS KARINA', '', '', 0),
('Cedula de Ciudadania', 1083463597, 'HEINI SOFIA', '', '', 0),
('Cedula de Ciudadania', 1083463637, 'eva margarita', '', '', 0),
('Cedula de Ciudadania', 1098634286, 'NINI JOHANA', '', '', 0),
('Cedula de Ciudadania', 1124381336, 'NEHEMIAS ELI', '', '', 0),
('Cedula de Ciudadania', 1128194284, 'merlis antoni', '', '', 0),
('Cedula de Ciudadania', 1221963233, 'ANGIE PAOLA', '', '', 0),
('Registro Civil', 123456, 'Pedro', 'Ramos', 'Calle 54 #34-66', 22222222);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
