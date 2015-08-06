i18n.map('es', {
  global: {
    save: 'Grabar',
    create: 'Crear',
    logout: 'Salir',
    back: 'Regresar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    confirm: 'Confirmar',
    choose: 'Seleccionar',
    noPermission: 'No tiene permisos',
    passwordNotMatch: 'Contraseñas no coinciden',
    optional: 'Opcional'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Correos',
        address: 'Dirección',
        verified: 'Verificado'
      },
      password: {
        title: 'Contraseña',
        new: 'Nueva Contraseña',
        confirm: 'Confirme Contraseña'
      },
      profile: {
        name: 'Nombre'
      }
    },
    index: {
      title: 'Cuentas',
      actions: {
        edit: 'Editar',
      },
      tableTitles: {
        name: 'Nombre',
        email: 'Correo',
        roles: 'Roles',
        actions: 'Acciones'
      }
    },
    update: {
      title: 'Actualizar Cuenta',
      messages: {
        noPermissions: 'No tiene permisos para editar este usuario'
      },
      sections: {
        profile: {
          title: 'Perfil'
        },
        roles: {
          title: 'Roles',
          selectRoles: 'Seleccionar roles de usuario'
        },
        changePassword: {
          title: 'Cambiar Contraseña'
        },
        deleteUser: {
          title: 'Advertencia',
          advice: 'Eliminar usuarios puede causar problemas.',
          button: 'Eliminar Usuario'
        }
      }
    },
    myAccount: {
      title: 'Mi Cuenta',
    },
    create: {
      title: 'Crear un Usuario',
      createInvitation: 'Crear invitación',
      createUserNow: 'Crear usuario ahora',
      inviteOther: 'Invitar Otro',
      selectRoles: 'Seleccione nuevos roles de usuario',
      email: 'Correo',
      messages: {
        successfullyCreated: 'Invitación creada exitosamente'
      }
    },
    changePassword: {
      title: 'Cambiar Contraseña',
    },
    updateProfile: {
      title: 'Actualizar Perfil',
    },
    register: {
      title: 'Registro',
      registerButton: 'Registrar',
      fields: {
        email: 'Correo',
        name: 'Nombre',
        password: 'Contraseña',
        confirmPassword: 'Contraseña (otra vez)'
      },
      messages: {
        invalidEmail: 'Correo no válido',
        invalidInvitationCode: 'Código de invitación no válido',
      }
    }
  },
  collections: {
    create: {
      title: 'Crear un(a) {$1}'
    },
    update: {
      title: 'Editar {$1}'
    },
    delete: {
      title: 'Eliminar {$1}',
      confirmQuestion: 'Esta seguro de eliminar este {$1}?'
    },
    common: {
      defaultPluralName: 'items',
      defaultSingularName: 'item',
    }
  },
  config: {
    update: {
      title: 'Configuración',
    }
  },
  dictionary: {
    update: {
      title: 'Diccionario'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Archivo no encontrado [{$i}]',
      errorUploading: 'Error cargando archivo',
      errorRemoving: 'Error eliminando archivo',
    }
  },
  pages: {
    schema: {
      title: 'Titulo',
      url: 'Url',
    },
    index: {
      title: 'Páginas',
    },
    create: {
      title: 'Crear pagina',
      chooseTemplate: 'Seleccione Plantilla'
    },
    update: {
      title: 'Actualizar página',
    },
    delete: {
      title: 'Eliminar página',
      confirmQuestion: 'Esta seguro de eliminar esta página?'
    }
  },
  attributes: {
    users: {
      pluralName: 'usuarios',
      singularName: 'usuario',
    },
    file: {
      choose: 'Seleccione archivo',
      noFile: 'Sin archivo',
    },
    image: {
      choose: 'Seleccione imágen'
    },
    images: {
      choose: 'Seleccione las imágenes'
    }
  },
  tabular: {
    search: 'Buscar:',
    info: 'Mostrando _START_ al _END_ de _TOTAL_ registros',
    infoEmpty: 'Mostrando 0 al 0 de 0 registros',
    lengthMenu: 'Mostrar _MENU_ registros',
    emptyTable: 'No hay datos disponibles en la tabla',
    paginate: {
      first: 'Primero',
      previous: 'Anterior',
      next: 'Próximo',
      last: 'Ultimo',
    }
  }
});
