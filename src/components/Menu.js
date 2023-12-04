// MainMenu.js
import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
} from '@mui/material';

function MainMenu({ handleSale }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [stockSubMenuAnchorEl, setStockSubMenuAnchorEl] = useState(null);
  const [clientsSubMenuAnchorEl, setClientsSubMenuAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [productoVenta, setProductoVenta] = useState('');
  const [cantidadVenta, setCantidadVenta] = useState(0);
  const [fechaVenta, setFechaVenta] = useState('');
  const [localVenta, setLocalVenta] = useState('Nueva Córdoba');
  const [precioVenta, setPrecioVenta] = useState(0);
  const [vendedor, setVendedor] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [errorFields, setErrorFields] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const handleStockSubMenuClick = (event) => {
    setStockSubMenuAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleStockSubMenuClose = () => {
    setStockSubMenuAnchorEl(null);
  };

  const handleClientsSubMenuClick = (event) => {
    setClientsSubMenuAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleClientsSubMenuClose = () => {
    setClientsSubMenuAnchorEl(null);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
    setSubMenuAnchorEl(null);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setProductoVenta('');
    setCantidadVenta(0);
    setFechaVenta('');
    setLocalVenta('Nueva Córdoba');
    setPrecioVenta(0);
    setVendedor('');
  };

  const handleFechaVentaChange = (event) => {
    setFechaVenta(event.target.value);
  };

  const handleLocalVentaChange = (event) => {
    setLocalVenta(event.target.value);
  };

  const locales = ['Nueva Córdoba', 'Urca', 'Online'];

  const vendedores = [
    { id: '1', name: 'Vendedor 1' },
    { id: '2', name: 'Vendedor 2' },
    // Agrega más vendedores según tus necesidades
  ];

  const handleGuardarVenta = () => {
    const errors = [];
    if (!productoVenta.trim()) {
      errors.push('Producto es obligatorio');
    }
    if (cantidadVenta <= 0) {
      errors.push('Cantidad debe ser mayor que cero');
    }
    if (!fechaVenta) {
      errors.push('Fecha es obligatoria');
    }

    if (errors.length > 0) {
      setErrorFields(errors);
      setSnackbarMessage('Completa todos los campos obligatorios');
      setSnackbarOpen(true);
    } else {
      if (typeof handleSale === 'function') {
        handleSale({
          productoVenta,
          cantidadVenta,
          fechaVenta,
          localVenta,
          precioVenta,
          vendedor,
        });
      }

      setSnackbarMessage('La venta se cargó correctamente');
      setSnackbarOpen(true);
      handleDialogClose();
    }
  };

  return (
    <div>
      <Button
        aria-controls="main-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menú
      </Button>
      <Menu
        id="main-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSubMenuClick}>Ventas</MenuItem>
        <MenuItem onClick={handleStockSubMenuClick}>Stock</MenuItem>
        <MenuItem onClick={handleClientsSubMenuClick}>Clientes</MenuItem>
      </Menu>
      <Menu
        id="sub-menu"
        anchorEl={subMenuAnchorEl}
        keepMounted
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
      >
        <MenuItem onClick={handleDialogOpen}>Cargar Ventas</MenuItem>
        <MenuItem onClick={handleSubMenuClose}>Ver Ventas</MenuItem>
      </Menu>
      <Menu
        id="stock-sub-menu"
        anchorEl={stockSubMenuAnchorEl}
        keepMounted
        open={Boolean(stockSubMenuAnchorEl)}
        onClose={handleStockSubMenuClose}
      >
        <MenuItem onClick={handleStockSubMenuClose}>Ver Stock</MenuItem>
        <MenuItem onClick={handleStockSubMenuClose}>Agregar Stock</MenuItem>
      </Menu>
      <Menu
        id="clients-sub-menu"
        anchorEl={clientsSubMenuAnchorEl}
        keepMounted
        open={Boolean(clientsSubMenuAnchorEl)}
        onClose={handleClientsSubMenuClose}
      >
        <MenuItem onClick={handleClientsSubMenuClose}>Ver Clientes</MenuItem>
        <MenuItem onClick={handleClientsSubMenuClose}>Agregar Clientes</MenuItem>
      </Menu>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Cargar Ventas</DialogTitle>
        <DialogContent>
          <TextField label="Producto" fullWidth value={productoVenta} onChange={(e) => setProductoVenta(e.target.value)} />
          <TextField label="Cantidad" fullWidth type="number" value={cantidadVenta} onChange={(e) => setCantidadVenta(e.target.value)} />
          <TextField label="" fullWidth type="date" value={fechaVenta} onChange={handleFechaVentaChange} />
          <FormControl fullWidth>
            <InputLabel>Local</InputLabel>
            <Select
              value={localVenta}
              onChange={handleLocalVentaChange}
            >
              {locales.map((local) => (
                <MenuItem key={local} value={local}>
                  {local}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Precio de Venta" fullWidth type="number" value={precioVenta} onChange={(e) => setPrecioVenta(e.target.value)} />
          <FormControl fullWidth>
            <InputLabel>Vendedor</InputLabel>
            <Select
              value={vendedor}
              onChange={(e) => setVendedor(e.target.value)}
            >
              {vendedores.map((vendedor) => (
                <MenuItem key={vendedor.id} value={vendedor.id}>
                  {vendedor.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancelar</Button>
          <Button onClick={handleGuardarVenta}>Guardar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
}

export default MainMenu;
